class SessionHandler{
    static test(temp){
        SessionHandler.test5 = temp;
    }
    static test5 = 0;

    constructor(){
    }
    static login(cb){
        //do Server call here
        cb();
    }
    static isAuthenticated(){
        return sessionStorage.getItem("LoggIn");
    }
}
export default SessionHandler;