var smartgrid = require("smart-grid");

/* It's principal settings in smart grid project */
var settings = {
  outputStyle: "less" /* less || scss || sass || styl */,
  columns: 12 /* number of grid columns */,
  offset: "30px" /* gutter width px || % || rem */,
  mobileFirst: false /* mobileFirst ? 'min-width' : 'max-width' */,
  container: {
    maxWidth: "970px" /* max-width оn very large screen */,
    fields: "30px" /* side fields */
  },
  breakPoints: {
    md: {
      width: "992px"
    },
    sm: {
      width: "720px",
      fields:
        "15px" /* set fields only if you want to change container.fields */
    },

    gallery: {
      width: "830px",
      fields: "15px"
    },
    xs: {
      width: "560px"
    }
    /* 
        We can create any quantity of break points.
 
        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
  }
};
smartgrid("./src/precss", settings);
