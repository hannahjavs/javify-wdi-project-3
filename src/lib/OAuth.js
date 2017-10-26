import queryString from 'query-string';

class OAuth {
  static provider = [{
    name: 'spotify',
    url: '/api/oauth/spotify',
    authEndpoint: 'https://accounts.spotify.com/authorize',
    // scope: ['user-read-email'],
    token_type: 'Bearer',
    scope: ['user-read-private user-read-email'],
    clientId: '912223979f2b485284987b63294b7887'
  }];

  static getAuthLink(provider) {
    const qs = {
      scope: provider.scope,
      client_id: provider.clientId,
      // redirect_uri: window.location.origin + window.location.pathname
      redirect_uri: window.location.href,
      response_type: 'code'
    };

    return `${provider.authEndpoint}?${queryString.stringify(qs)}`;
  }

  static getProvider(providerName) {
    const provider = this.provider.find(provider => provider.name === providerName);
    provider.authLink = this.getAuthLink(provider);
    return provider;
  }
}

export default OAuth;
