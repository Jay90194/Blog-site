module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'baby': 'F6D4D4',
      },
      spacing: {
        128: '32rem',
        129: '28rem',
        127: '21rem',
        13: '13rem,',
        200: '20rem',
        33: '8.3rem',
        57: '18rem',
        19: '3rem',
        65: '17rem',


    },
    // backgroundImage: theme => ({

    //   'Ring-one': "url('../image/blob1.svg')",

    //   'Ring-two': "url('../image/blob2.svg')",
    //  })
    rotate:{
      '25': '25deg',
    }
    },
  },
  variants: {},
  plugins: [],
}
