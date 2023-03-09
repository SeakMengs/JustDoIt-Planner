// data model schema 
export const data = [
    {
        uid: '',
        user: {
            name: '',
            email: '',
            profileImage: [
                {
                    profileImageId: '',
                    profileImageUrl: '',
                    profileImageModifiedDateTime: '',
                }
            ],
            preferredTheme: 'dark'
        },
        data: {
            todo: [
                {
                    todoId: '',
                    todoDescription: '',
                    createdDateTime: '',
                    todoIsComplete: 'false',
                }
            ],
            schedule: [
                {
                    scheduleId: '',
                    scheduleDescription: '',
                    scheduleTime: '',
                }
            ],
            task: [
                {
                    taskId: '',
                    taskName: '',
                    taskStatus: '',
                    taskDescription: '',
                    taskCreatedDateTime: '',
                    taskAssignedTo: '',
                    taskDueDateTime: '',
                    taskPriority: '',
                }
            ]
        }
    }
]