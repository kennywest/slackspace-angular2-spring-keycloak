import { KeycloakService } from 'keycloak-angular';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
          config: {
            url: 'http://localhost:4200/auth',
            realm: 'Demo-Realm',
            clientId: 'tutorial-frontend'
          },
          initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: false
          },
          enableBearerInterceptor: true,
          bearerExcludedUrls: []
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}