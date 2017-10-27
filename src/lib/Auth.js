class Auth {
  static setToken(token, refreshToken, spotifyId) {
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('spotifyId', spotifyId);
    return localStorage.setItem('token', token);
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  static getSpotifyId() {
    return localStorage.getItem('spotifyId');
  }

  static getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  static isAuthenticated() {
    return !!this.getToken();
  }

  static logout() {
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('token');
    localStorage.removeItem('spotifyId');
  }

  static getPayload() {
    const token = this.getToken();
    if(!token) return null;
    return JSON.parse(atob(token.split('.')[1]));
  }
}

export default Auth;
