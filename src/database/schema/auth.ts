import { pgTable, unique, varchar, integer, pgEnum } from "drizzle-orm/pg-core";

export const choiceEnum = pgEnum("choice", ["Yes", "No"]);

export const permissionEums = pgEnum("permit", [
  "View",
  "Edit",
  "Delete",
  "Execute",
]);

export const users = pgTable(
  "users",
  {
    userInternalId: varchar("user_internal_id").primaryKey(),
    userPassword: varchar("user_password", { length: 256 }).notNull(),
    userEmail: varchar("user_email", { length: 256 }).unique().notNull(),
    userName: varchar("user_name", { length: 256 }).notNull(),
  },
  (user) => {
    return {
      nameEmailIdx: unique("composite_email_name_idx").on(
        user.userEmail,
        user.userName
      ),
    };
  }
);

export const roles = pgTable("roles", {
  roleId: integer("role_id").primaryKey(),
  roleName: varchar("role_name", { length: 100 }).notNull(),
  isAdmin: choiceEnum("choice"),
});

export const usersHasRoles = pgTable(
  "user_has_roles",
  {
    roleId: integer("role_id").references(() => roles.roleId, {
      onDelete: "restrict",
      onUpdate: "cascade",
    }),
    userId: varchar("user_id").references(() => users.userInternalId, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
  },
  (userHasRole) => {
    return {
      roleUserIdx: unique("composite_role_usr_idx").on(
        userHasRole.roleId,
        userHasRole.userId
      ),
    };
  }
);

export const permissions = pgTable("permissions", {
  permissionId: integer("permission_id").primaryKey(),
  permits: permissionEums("permit"),
});

export const roleHasPermissions = pgTable(
  "role_has_permissions",
  {
    roleId: integer("role_id").references(() => roles.roleId, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
    permissionId: integer("permission_id").references(
      () => permissions.permissionId,
      {
        onDelete: "restrict",
        onUpdate: "cascade",
      }
    ),
  },
  (roleHasPerm) => {
    return {
      roleUserIdx: unique("composite_role_perm_idx").on(
        roleHasPerm.roleId,
        roleHasPerm.permissionId
      ),
    };
  }
);
