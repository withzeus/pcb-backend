# pcb backend

backend server for `pcb` project

## 9/19/2023

    ```
    - setting up restful application structure
        - added npm scripts
        - added orm and migrations
        - implemented route/controller/service struct
    ```

## 9/22/2023

    ```
    - endpoints for user/auth
        - added get, post method
            - get users (/users)
                wip
            - post users (/users)
                request : {
                    "userName" : "",
                    "userEmail" : "",
                    "userPassword" : ""
                }
                400
                response : {
                    "success" : false,
                    "message" : "Failed to create user :$user"
                }
                201
                response : {
                    "success" : true,
                    "message" : "Created user :$user"
                }
        - added types/models
        - added err handlers, hash/encrypt helpers,
        - user db schemas minor updates
    ```
