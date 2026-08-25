const baseUrl = "http://localhost:8080"

export const apiEndPoint = {
    GetAllUser:`${baseUrl}/api/users`,
    AddUser:`${baseUrl}/api/users`,
    GetSingleUsre:`${baseUrl}/api/users:id`,
    DeleteUsre:`${baseUrl}/api/users:id`,
    login:`${baseUrl}/auth/login`,
    signup:`${baseUrl}/auth/signup`,
}