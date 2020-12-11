var smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
var settings = {
  outputStyle: 'scss', /* less || scss || sass || styl */
  columns: 12, /* number of grid columns */
  offset: '20px', /* gutter width px || % || rem */
  mobileFirst: true, /* mobileFirst ? 'min-width' : 'max-width' */
  container: {
    maxWidth: '300px', /* max-width оn very large screen */
    fields: '0px' /* side fields */
  },
  breakPoints: {
    lg: {
      width: '1230px',
      offset: '45px',
      maxWidth: '1200px'
    },
    md: {
      width: '1024px',
      offset: '40px',
      maxWidth: '980px'
    },
    sm: {
      width: '768px',
      offset: '40px'
    }
  }
};

smartgrid('./', settings);