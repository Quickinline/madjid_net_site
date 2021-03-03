
export default ({ app }, inject) => {
  inject('globalVars', () => {
    return {
      facebookPage: 'https://www.facebook.com/madjid.net.5',
      instagramPage: '',
      phone: '0770 23 00 44',
      email: 'contact-net@madjid-algerie.com',
      commercial: 'commercial-net@madjid-algerie.com'
    }
  })
}
