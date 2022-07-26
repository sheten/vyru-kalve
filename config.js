export const PRIMARY_COLOR = "#15263D";
export const PAGE_LAYOUT_MARGINS = 35;
export const PAGE_LAYOUT_MARGINS_MOBILE = 10;

export const TEST = true;
// export const DOMAIN_URL = "https://www.vyrukalve.lt/"
export const DOMAIN_URL = "https://localhost:3000/"



export const PRIMARY_FONT_SIZE = 16;
export const SECONDARY_FONT_SIZE = 14;

export const HEADER_MOBILE_FONT_SIZE = 22;
export const PRIMARY_MOBILE_FONT_SIZE = 16;
export const SECONDARY_MOBILE_FONT_SIZE = 10;

export const DESKTOPS_SIZE = 1280;
export const LAPTOPS_SIZE = 1024;
export const TABLETS_SIZE = 768;
export const MOBILE_SIZE = 480;


export const PAYSERA_PAAUGLIU_OPTIONS = {
  projectid: '227920',
  sign_password: '961f1e759d4e9cca6754b1477b3b491a',
  accepturl: DOMAIN_URL + "paaugliu-stovykla-order-confirmation",
  cancelurl: DOMAIN_URL + '/order-failed',
  callbackurl: 'https://us-central1-vyru-kalve.cloudfunctions.net/acceptCallback',
  test: TEST? 1 : 0,
};

export const PAYSERA_TECIO_SUNAUS_OPTIONS = {
  projectid: '227920',
  sign_password: '961f1e759d4e9cca6754b1477b3b491a',
  accepturl: DOMAIN_URL + "tecio-sunaus-order-confirmation",
  cancelurl: DOMAIN_URL + '/order-failed',
  callbackurl: 'https://us-central1-vyru-kalve.cloudfunctions.net/acceptCallback',
  test: TEST? 1 : 0,
};