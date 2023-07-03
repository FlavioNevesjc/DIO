function getAdmin(Map){
    const login = new Map();
    login.set('Flavio', 'Admin');
    login.set('Regiane', 'User');
    login.set('Anthony', 'Admin');
    return login.get;
}
getAdmin(Flavio);
