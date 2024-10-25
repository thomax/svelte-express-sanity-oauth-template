
export const oauthToSanity = (oauthUser) => {
  const { sub, email, email_verified, picture, name, family_name, given_name } = oauthUser._json
  return {
    _type: 'user',
    givenName: given_name,
    familyName: family_name,
    name,
    email,
    isEmailVerified: email_verified,
    imageUrl: picture,
    provider: oauthUser.provider,
    providerId: sub,
  }
}