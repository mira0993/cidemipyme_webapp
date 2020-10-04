import React from "react"
import favicon from 'images/logo_favicon_32.png';
import preview from 'images/page_preview.png';


class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta property="og:title" content="CIDEMiPyMe" />
          <meta property="og:description" content="Hacemos Negocio Tu Negocio" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://cidemipyme1.s3-website-us-west-2.amazonaws.com/" />
          <meta property="og:image" content={preview} />
          <link rel="icon" href={favicon} />
          {/* Bootstrap core JS */}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
          {/* Third party plugin JS */}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
          {/* Font Awesome icons (free version) */}
          <script src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" crossOrigin="anonymous"></script>
          {/*<!-- Google fonts-->*/}
          <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
          {/* Third party plugin */}
          <link href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" rel="stylesheet" />
          {/* Google fonts */}
          <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          <div id="fb-root"></div>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />

          {this.props.postBodyComponents}
        </body>

      </html>
    )
  }
}

export default HTML;