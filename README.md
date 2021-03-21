# Chaos Enginnering Demo Application

## Description
A demo application to perform todo tasks with basic CRUD functionalities

### What is requried?
node should be installed
[NodeJS](https://nodejs.org/en/download/)

to install all NodeJs libraries after installing node for this project:
```
npm i 
```

or you can do it manually by adding these libraries

```js
npm i express@4.17.1
```

# to start the app:
```
node app.js
```

# All APIs { BASE_URL = 'localhost:9000/api' }

#### Get all tasks
{BASE_URL}/tasks

```
response: {
    {
        "status": true,
        "message": "fetched successfully",
        "data": [
            {
                "_id": "604edbe4a3ab5203e245fa95",
                "title": "my first task",
                "description": "desc",
            }
        ]
    }
}
```

#### Get task by its Id {ID = 3947238rufekjfkdjfksjr9ur}
{BASE_URL}/tasks/{ID}

```
response: {
    {
        "status": true,
        "message": "fetched successfully",
        "data": {
            "_id": "604edbe4a3ab5203e245fa95",
            "title": "task-1",
            "description": "description-1",
        }
    }
}
```

#### create a task
{BASE_URL/tasks}

```
request.body : {
    title : 'title-1',
    description : 'description-1'
}

response : {
    {
        "status": true,
        "message": "created successfully",
        "data": {
            "_id": "604edbe4a3ab5203e245fa95",
            "title": "task-1",
            "description": "description-1",
        }
    }
}
```

####  update a task {ID = 32398urejkejfksdjf39ru93ur}
{BASE_URL}/tasks/{ID}

```
request.body : {
    title : 'title-2',
    description : 'description-2'
}

response : {
    {
        "status": true,
        "message": "updated successfully",
        "data": {
            "_id": "604edbe4a3ab5203e245fa95",
            "title": "my first task",
            "description": "desc",
        }
    }
}
```

#### delete a task by its ID {ID = 39df98ruefdj9e8urefe9u}
{BASE_URL}/tasks/{ID}

```
response : {
        {
        "status": true,
        "message": "deleted successfully",
        "data": {
            "_id": "604edbe4a3ab5203e245fa95",
            "title": "my first task",
            "description": "desc",
        }
    }
}
```
