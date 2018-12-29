export default async () => {
    return new Promise(resolve => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '175356046310-9q1dofrd1goven8tg5shunhgdl3umh03.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                resolve(window.gapi.auth2.getAuthInstance());
            });
        });
    });
} 