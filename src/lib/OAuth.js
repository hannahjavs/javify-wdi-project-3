import queryString from 'query-string';

class OAuth {
  static provider = [{
    name: 'spotify',
    url: '/auth/spotify',
    authEndpoint: 'https://accounts.spotify.com/authorize',
    // scope: ['user-read-email'],
    token_type: 'Bearer',
    scope: ['user-read-private user-read-email'],
    clientId: '3d845e51b36803346543'
  }];

  static getAuthLink(provider) {
    const qs = {
      scope: provider.scope,
      client_id: provider.clientId,
      // redirect_uri: window.location.origin + window.location.pathname
      redirect_uri: window.location.href + '/' // this is the above code simplified
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
