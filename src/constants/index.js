import { easings } from 'react-animation';

/**
 * @constant
 * global flag for website
 */
export const IS_USE_PHOTO_WEDDING = false;

/**
 * @constants
 * for Brides information
 */
export const THE_BRIDE = 'Maya & Fajar';
export const GIRL_NAME = 'Mayantya Kusumawicitra Harmadi';
export const GIRL_PARENT_NAME = `Putri dari Bapak Bambang Setyo Susion Harmadi <br /> & Ibu Evi Ratnaningrum`;
export const BOY_NAME = 'Fajar Saputra';
export const BOY_PARENT_NAME = `Putra dari Bapak Hasan Basri Pulungan <br />& Ibu Nurainun`;

/**
 * @constants - SEO Requirement
 */
export const SEO_IMAGE = '';
export const SEO_URL = 'https://invitato.net';
export const SEO_TITLE = `The Wedding of ${THE_BRIDE} by Invitao.net`;
export const SEO_DESCRIPTION = `Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan keberkahan. - ${THE_BRIDE}`;

/**
 * @constants - google maps
 * for google maps configuration
 */
export const GOOGLE_MAPS_LINK = `https://g.page/HARRISHotelSentralandSemarang?share`;

/**
 * @constants - epoch time
 * this configuration for wedding time
 * use this website for convert local time to epoch time
 * https://www.epochconverter.com/
 */
export const EPOCH_START_EVENT = 1607734800;
export const EPOCH_END_EVENT = 1607749200;

/**
 * @constants - wedding information
 */
export const WEDDING_AKAD = 'Sabtu, 12 December 2020';
export const WEDDING_AKAD_TIME = '08:00 WIB';
export const WEDDING_RESEPSI = 'Sabtu, 12 December 2020';
export const WEDDING_RESEPSI_TIME = '11:00 - 12:00 WIB';
export const WEDDING_LOCATION = `Diamond Ballroom, Pesona Hotel <br /> Jl. Depok No. 33 Semarang`;
export const WEDDING_LOCATION_AKAD = WEDDING_LOCATION;

/**
 * @constants
 * for footer sections
 */
export const SOUND_BY = `Elvis Presley - Can't Help Falling In Love With You (Saxophone Cover by Alexandra)`;
export const SOUND_URL = 'https://www.youtube.com/watch?v=llcQu-XB6oE&feature=youtu.be&ab_channel=AlexandraIlieva';

/**
 * @constants
 * constants for custom animation
 */
const FALLBACK_EASING = easings || {};
export const CUSTOM_ANIMATION = `pop-in 1.5s ${FALLBACK_EASING.easeOutBack} forwards`;
export const LAZY_LOAD = {
  height: 200,
  offset: -150,
};

/**
 * @constant
 * Live streaming & youtube Live
 */
export const YOUTUBE_LINK = 'https://youtu.be/K0ted2DWU-s';
export const YOUTUBE_EMBED = 'https://www.youtube.com/embed/K0ted2DWU-s';
