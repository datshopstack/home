import React, { Component } from 'react';
import logo from './logo.svg';
import './scaffolding.css';
import './App.css';
import './Custom.css';
import Topbar from './Topbar';
import Header from './Header';
import Mobileheader from './Mobileheader';
import Footer from './Footer';
import Main from './main';
class Contact extends Component {
  render() {
    return (
       <div className="pt-wrapper">
        {/* Subpages */}
       <div className="subpages" style={{ paddingTop: 100 }}> 
      <section data-id="contact" data-title="Contact" className="pt-page pt-page-contact pt-page-current pt-page-relative">
  <div className="section-inner custom-page-content">
    <div className="page-header">
      <h2 className="section-title">Contact</h2>
    </div>
    <div className="page-content">
      <div className="fw-page-builder-content"><section className="fw-main-row ">
          <div className="fw-container">
            <div className="row">
              <div className=" col-xs-12 col-sm-6 ">
                <div id="col_inner_id-5c80cf503b56d" className="fw-col-inner" data-paddings="0px 0px 0px 0px">
                  <div className="block-title">
                    <h3>Get in<span> Touch</span></h3>
                  </div>
                  <div className="fw-map" data-locations="[{&quot;title&quot;:&quot;&quot;,&quot;url&quot;:&quot;&quot;,&quot;thumb&quot;:false,&quot;coordinates&quot;:{&quot;lat&quot;:34.0522342,&quot;lng&quot;:-118.2436849},&quot;description&quot;:&quot;&quot;}]" data-map-type="ROADMAP" data-map-height={180} data-gmap-key="AIzaSyChfCIeyskMH-hWgbqEiRrrPrdznuuZs9w" data-disable-scrolling data-map-zoom={16}>
                    <div className="fw-map-canvas" style={{height: 180, position: 'relative', overflow: 'hidden'}}><div style={{height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'rgb(229, 227, 223)'}}><div className="gm-style" style={{position: 'absolute', zIndex: 0, left: 0, top: 0, height: '100%', width: '100%', padding: 0, borderWidth: 0, margin: 0}}><div tabIndex={0} style={{position: 'absolute', zIndex: 0, left: 0, top: 0, height: '100%', width: '100%', padding: 0, borderWidth: 0, margin: 0, cursor: 'url("https://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default'}}><div style={{zIndex: 1, position: 'absolute', left: '50%', top: '50%', width: '100%', transform: 'translate(0px, 0px)'}}><div style={{position: 'absolute', left: 0, top: 0, zIndex: 100, width: '100%'}}><div style={{position: 'absolute', left: 0, top: 0, zIndex: 0}}><div style={{position: 'absolute', zIndex: 984, transform: 'matrix(1, 0, 0, 1, -101, -24)'}}><div style={{position: 'absolute', left: 0, top: 0, width: 256, height: 256}}><div style={{width: 256, height: 256}} /></div><div style={{position: 'absolute', left: '-256px', top: 0, width: 256, height: 256}}><div style={{width: 256, height: 256}} /></div><div style={{position: 'absolute', left: '-256px', top: '-256px', width: 256, height: 256}}><div style={{width: 256, height: 256}} /></div><div style={{position: 'absolute', left: 0, top: '-256px', width: 256, height: 256}}><div style={{width: 256, height: 256}} /></div><div style={{position: 'absolute', left: 256, top: '-256px', width: 256, height: 256}}><div style={{width: 256, height: 256}} /></div><div style={{position: 'absolute', left: 256, top: 0, width: 256, height: 256}}><div style={{width: 256, height: 256}} /></div></div></div></div><div style={{position: 'absolute', left: 0, top: 0, zIndex: 101, width: '100%'}} /><div style={{position: 'absolute', left: 0, top: 0, zIndex: 102, width: '100%'}} /><div style={{position: 'absolute', left: 0, top: 0, zIndex: 103, width: '100%'}}><div style={{position: 'absolute', left: 0, top: 0, zIndex: -1}}><div style={{position: 'absolute', zIndex: 984, transform: 'matrix(1, 0, 0, 1, -101, -24)'}}><div style={{width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: 0, top: 0}} /><div style={{width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: '-256px', top: 0}} /><div style={{width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: '-256px', top: '-256px'}} /><div style={{width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: 0, top: '-256px'}} /><div style={{width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: 256, top: '-256px'}} /><div style={{width: 256, height: 256, overflow: 'hidden', position: 'absolute', left: 256, top: 0}} /></div></div><div style={{width: 27, height: 43, overflow: 'hidden', position: 'absolute', left: '-14px', top: '-43px', zIndex: 0}}><img alt src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png" draggable="false" style={{position: 'absolute', left: 0, top: 0, width: 27, height: 43, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none'}} /></div></div><div style={{position: 'absolute', left: 0, top: 0, zIndex: 0}}><div style={{position: 'absolute', zIndex: 984, transform: 'matrix(1, 0, 0, 1, -101, -24)'}}><div style={{position: 'absolute', left: 0, top: '-256px', width: 256, height: 256, transition: 'opacity 200ms linear'}}><img draggable="false" alt role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i11242!3i26167!4i256!2m3!1e0!2sm!3i455165206!3m9!2sen!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0&key=AIzaSyChfCIeyskMH-hWgbqEiRrrPrdznuuZs9w&token=87262" style={{width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '-256px', top: '-256px', width: 256, height: 256, transition: 'opacity 200ms linear'}}><img draggable="false" alt role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i11241!3i26167!4i256!2m3!1e0!2sm!3i455165206!3m9!2sen!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0&key=AIzaSyChfCIeyskMH-hWgbqEiRrrPrdznuuZs9w&token=5524" style={{width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: 256, top: '-256px', width: 256, height: 256, transition: 'opacity 200ms linear'}}><img draggable="false" alt role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i11243!3i26167!4i256!2m3!1e0!2sm!3i455165218!3m9!2sen!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0&key=AIzaSyChfCIeyskMH-hWgbqEiRrrPrdznuuZs9w&token=125607" style={{width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: 0, top: 0, width: 256, height: 256, transition: 'opacity 200ms linear'}}><img draggable="false" alt role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i11242!3i26168!4i256!2m3!1e0!2sm!3i455165230!3m9!2sen!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0&key=AIzaSyChfCIeyskMH-hWgbqEiRrrPrdznuuZs9w&token=78907" style={{width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: '-256px', top: 0, width: 256, height: 256, transition: 'opacity 200ms linear'}}><img draggable="false" alt role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i11241!3i26168!4i256!2m3!1e0!2sm!3i455165218!3m9!2sen!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0&key=AIzaSyChfCIeyskMH-hWgbqEiRrrPrdznuuZs9w&token=10736" style={{width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none'}} /></div><div style={{position: 'absolute', left: 256, top: 0, width: 256, height: 256, transition: 'opacity 200ms linear'}}><img draggable="false" alt role="presentation" src="https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i16!2i11243!3i26168!4i256!2m3!1e0!2sm!3i455165230!3m9!2sen!3sUS!5e18!12m1!1e68!12m3!1e37!2m1!1ssmartmaps!4e0&key=AIzaSyChfCIeyskMH-hWgbqEiRrrPrdznuuZs9w&token=29574" style={{width: 256, height: 256, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none'}} /></div></div></div></div><div className="gm-style-pbc" style={{zIndex: 2, position: 'absolute', height: '100%', width: '100%', padding: 0, borderWidth: 0, margin: 0, left: 0, top: 0, opacity: 0}}><p className="gm-style-pbt" /></div><div style={{zIndex: 3, position: 'absolute', height: '100%', width: '100%', padding: 0, borderWidth: 0, margin: 0, left: 0, top: 0}}><div style={{zIndex: 4, position: 'absolute', left: '50%', top: '50%', width: '100%', transform: 'translate(0px, 0px)'}}><div style={{position: 'absolute', left: 0, top: 0, zIndex: 104, width: '100%'}} /><div style={{position: 'absolute', left: 0, top: 0, zIndex: 105, width: '100%'}} /><div style={{position: 'absolute', left: 0, top: 0, zIndex: 106, width: '100%'}}><div style={{width: 27, height: 43, overflow: 'hidden', position: 'absolute', opacity: 0, left: '-14px', top: '-43px', zIndex: 0}}><img alt src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png" draggable="false" useMap="#gmimap0" style={{position: 'absolute', left: 0, top: 0, width: 27, height: 43, userSelect: 'none', border: 0, padding: 0, margin: 0, maxWidth: 'none'}} /><map name="gmimap0" id="gmimap0"><area log="miw" coords="13.5,0,4,3.75,0,13.5,13.5,43,27,13.5,23,3.75" shape="poly" title style={{cursor: 'pointer'}} /></map></div></div><div style={{position: 'absolute', left: 0, top: 0, zIndex: 107, width: '100%'}} /></div></div></div><iframe aria-hidden="true" src="about:blank" style={{zIndex: -1, position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none'}} frameBorder={0} /><div style={{marginLeft: 5, marginRight: 5, zIndex: 1000000, position: 'absolute', left: 0, bottom: 0}}><a target="_blank" rel="noopener" href="https://maps.google.com/maps?ll=34.052234,-118.243685&z=16&t=m&hl=en&gl=US&mapclient=apiv3" title="Open this area in Google Maps (opens a new window)" style={{position: 'static', overflow: 'visible', float: 'none', display: 'inline'}}><div style={{width: 66, height: 26, cursor: 'pointer'}}><img alt src="https://maps.gstatic.com/mapfiles/api-3/images/google4.png" draggable="false" style={{position: 'absolute', left: 0, top: 0, width: 66, height: 26, userSelect: 'none', border: 0, padding: 0, margin: 0}} /></div></a></div><div style={{backgroundColor: 'white', padding: '15px 21px', border: '1px solid rgb(171, 171, 171)', fontFamily: 'Roboto, Arial, sans-serif', color: 'rgb(34, 34, 34)', boxSizing: 'border-box', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 16px', zIndex: 10000002, display: 'none', width: 300, height: 170, position: 'absolute', left: 76, top: 5}}><div style={{padding: '0px 0px 10px', fontSize: 16}}>Map Data</div><div style={{fontSize: 13}}>Map data ©2019 Google</div><button draggable="false" title="Close" aria-label="Close" type="button" className="gm-ui-hover-effect" style={{background: 'none', display: 'block', border: 0, margin: 0, padding: 0, position: 'absolute', cursor: 'pointer', userSelect: 'none', top: 0, right: 0, width: 37, height: 37}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%206.41L17.59%205%2012%2010.59%206.41%205%205%206.41%2010.59%2012%205%2017.59%206.41%2019%2012%2013.41%2017.59%2019%2019%2017.59%2013.41%2012z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{pointerEvents: 'none', display: 'block', width: 13, height: 13, margin: 12}} /></button></div><div className="gmnoprint" style={{zIndex: 1000001, position: 'absolute', right: 166, bottom: 0, width: 121}}><div draggable="false" className="gm-style-cc" style={{userSelect: 'none', height: 14, lineHeight: 14}}><div style={{opacity: '0.7', width: '100%', height: '100%', position: 'absolute'}}><div style={{width: 1}} /><div style={{backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: 1}} /></div><div style={{position: 'relative', paddingRight: 6, paddingLeft: 6, fontFamily: 'Roboto, Arial, sans-serif', fontSize: 10, color: 'rgb(68, 68, 68)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block'}}><a style={{textDecoration: 'none', cursor: 'pointer', display: 'none'}}>Map Data</a><span>Map data ©2019 Google</span></div></div></div><div className="gmnoscreen" style={{position: 'absolute', right: 0, bottom: 0}}><div style={{fontFamily: 'Roboto, Arial, sans-serif', fontSize: 11, color: 'rgb(68, 68, 68)', direction: 'ltr', textAlign: 'right', backgroundColor: 'rgb(245, 245, 245)'}}>Map data ©2019 Google</div></div><div className="gmnoprint gm-style-cc" draggable="false" style={{zIndex: 1000001, userSelect: 'none', height: 14, lineHeight: 14, position: 'absolute', right: 95, bottom: 0}}><div style={{opacity: '0.7', width: '100%', height: '100%', position: 'absolute'}}><div style={{width: 1}} /><div style={{backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: 1}} /></div><div style={{position: 'relative', paddingRight: 6, paddingLeft: 6, fontFamily: 'Roboto, Arial, sans-serif', fontSize: 10, color: 'rgb(68, 68, 68)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block'}}><a href="https://www.google.com/intl/en_US/help/terms_maps.html" target="_blank" rel="noopener" style={{textDecoration: 'none', cursor: 'pointer', color: 'rgb(68, 68, 68)'}}>Terms of Use</a></div></div><button draggable="false" title="Toggle fullscreen view" aria-label="Toggle fullscreen view" type="button" className="gm-control-active gm-fullscreen-control" style={{background: 'none rgb(255, 255, 255)', border: 0, margin: 10, padding: 0, position: 'absolute', cursor: 'pointer', userSelect: 'none', borderRadius: 2, height: 40, width: 40, boxShadow: 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px', overflow: 'hidden', top: 0, right: 0}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%20018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: 18, width: 18}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: 18, width: 18}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C0v2v4h2V2h4V0H2H0z%20M16%2C0h-4v2h4v4h2V2V0H16z%20M16%2C16h-4v2h4h2v-2v-4h-2V16z%20M2%2C12H0v4v2h2h4v-2H2V12z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: 18, width: 18}} /></button><div draggable="false" className="gm-style-cc" style={{userSelect: 'none', height: 14, lineHeight: 14, position: 'absolute', right: 0, bottom: 0}}><div style={{opacity: '0.7', width: '100%', height: '100%', position: 'absolute'}}><div style={{width: 1}} /><div style={{backgroundColor: 'rgb(245, 245, 245)', width: 'auto', height: '100%', marginLeft: 1}} /></div><div style={{position: 'relative', paddingRight: 6, paddingLeft: 6, fontFamily: 'Roboto, Arial, sans-serif', fontSize: 10, color: 'rgb(68, 68, 68)', whiteSpace: 'nowrap', direction: 'ltr', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block'}}><a target="_blank" rel="noopener" title="Report errors in the road map or imagery to Google" href="https://www.google.com/maps/@34.0522342,-118.2436849,16z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3" style={{fontFamily: 'Roboto, Arial, sans-serif', fontSize: 10, color: 'rgb(68, 68, 68)', textDecoration: 'none', position: 'relative'}}>Report a map error</a></div></div><div className="gmnoprint gm-bundled-control gm-bundled-control-on-bottom" draggable="false" controlwidth={0} controlheight={0} style={{margin: 10, userSelect: 'none', position: 'absolute', display: 'none', bottom: 14, right: 0}}><div className="gmnoprint" style={{display: 'none', position: 'absolute'}}><div draggable="false" style={{userSelect: 'none', boxShadow: 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px', borderRadius: 2, cursor: 'pointer', backgroundColor: 'rgb(255, 255, 255)'}}><button draggable="false" title="Zoom in" aria-label="Zoom in" type="button" className="gm-control-active" style={{background: 'none', display: 'block', border: 0, margin: 0, padding: 0, position: 'relative', cursor: 'pointer', userSelect: 'none', overflow: 'hidden'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: 18, width: 18}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23333%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: 18, width: 18}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpolygon%20fill%3D%22%23111%22%20points%3D%2218%2C7%2011%2C7%2011%2C0%207%2C0%207%2C7%200%2C7%200%2C11%207%2C11%207%2C18%2011%2C18%2011%2C11%2018%2C11%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: 18, width: 18}} /></button><div style={{position: 'relative', overflow: 'hidden', width: 30, height: 1, margin: '0px 5px', backgroundColor: 'rgb(230, 230, 230)'}} /><button draggable="false" title="Zoom out" aria-label="Zoom out" type="button" className="gm-control-active" style={{background: 'none', display: 'block', border: 0, margin: 0, padding: 0, position: 'relative', cursor: 'pointer', userSelect: 'none', overflow: 'hidden'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: 18, width: 18}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: 18, width: 18}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%20viewBox%3D%220%200%2018%2018%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C7h18v4H0V7z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: 18, width: 18}} /></button></div></div><div className="gm-svpc" dir="ltr" title="Drag Pegman onto the map to open Street View" controlwidth={40} controlheight={40} style={{backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px', borderRadius: 2, width: 40, height: 40, cursor: 'url("https://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default', display: 'none', position: 'absolute'}}><div style={{position: 'absolute', left: '50%', top: '50%'}} /></div><div className="gmnoprint" controlwidth={40} controlheight={40} style={{display: 'none', position: 'absolute'}}><div style={{width: 40, height: 40}}><button draggable="false" title="Rotate map 90 degrees" aria-label="Rotate map 90 degrees" type="button" className="gm-control-active" style={{background: 'none rgb(255, 255, 255)', display: 'none', border: 0, margin: '0px 0px 32px', padding: 0, position: 'relative', cursor: 'pointer', userSelect: 'none', width: 40, height: 40, top: 0, left: 0, overflow: 'hidden', boxShadow: 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px', borderRadius: 2}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: 18, width: 18}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: 18, width: 18}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2222%22%20viewBox%3D%220%200%2024%2022%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2010c0-5.52-4.48-10-10-10s-10%204.48-10%2010v5h5v-5c0-2.76%202.24-5%205-5s5%202.24%205%205v5h-4l6.5%207%206.5-7h-4v-5z%22%20clip-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: 18, width: 18}} /></button><button draggable="false" title="Tilt map" aria-label="Tilt map" type="button" className="gm-tilt gm-control-active" style={{background: 'none rgb(255, 255, 255)', display: 'block', border: 0, margin: 0, padding: 0, position: 'relative', cursor: 'pointer', userSelect: 'none', width: 40, height: 40, top: 0, left: 0, overflow: 'hidden', boxShadow: 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px', borderRadius: 2}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{width: 18}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{width: 18}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2018%2016%22%3E%0A%20%20%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%2C16h8V9H0V16z%20M10%2C16h8V9h-8V16z%20M0%2C7h8V0H0V7z%20M10%2C0v7h8V0H10z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{width: 18}} /></button></div></div></div><div className="gmnoprint" style={{margin: 10, zIndex: 0, position: 'absolute', cursor: 'pointer', display: 'none', left: 0, top: 0}}><div className="gm-style-mtc" style={{float: 'left', position: 'relative'}}><div role="button" tabIndex={0} title="Show street map" aria-label="Show street map" aria-pressed="true" draggable="false" style={{direction: 'ltr', overflow: 'hidden', textAlign: 'center', height: 40, display: 'table-cell', verticalAlign: 'middle', position: 'relative', color: 'rgb(0, 0, 0)', fontFamily: 'Roboto, Arial, sans-serif', userSelect: 'none', fontSize: 18, backgroundColor: 'rgb(255, 255, 255)', padding: '0px 17px', borderBottomLeftRadius: 2, borderTopLeftRadius: 2, WebkitBackgroundClip: 'padding-box', backgroundClip: 'padding-box', boxShadow: 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px', minWidth: 36, fontWeight: 500}}>Map</div><div style={{backgroundColor: 'white', zIndex: -1, padding: 2, borderBottomLeftRadius: 2, borderBottomRightRadius: 2, boxShadow: 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px', position: 'absolute', left: 0, top: 40, textAlign: 'left', display: 'none'}}><div draggable="false" title="Show street map with terrain" style={{color: 'black', fontFamily: 'Roboto, Arial, sans-serif', userSelect: 'none', fontSize: 18, backgroundColor: 'rgb(255, 255, 255)', padding: '5px 8px 5px 5px', direction: 'ltr', textAlign: 'left', whiteSpace: 'nowrap'}}><span role="checkbox" style={{verticalAlign: 'middle'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%203H5c-1.11%200-2%20.9-2%202v14c0%201.1.89%202%202%202h14c1.11%200%202-.9%202-2V5c0-1.1-.89-2-2-2zm-9%2014l-5-5%201.41-1.41L10%2014.17l7.59-7.59L19%208l-9%209z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '1em', width: '1em', transform: 'translateY(0.15em)', display: 'none'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%205v14H5V5h14m0-2H5c-1.1%200-2%20.9-2%202v14c0%201.1.9%202%202%202h14c1.1%200%202-.9%202-2V5c0-1.1-.9-2-2-2z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '1em', width: '1em', transform: 'translateY(0.15em)'}} /></span><label style={{verticalAlign: 'middle', cursor: 'pointer'}}>Terrain</label></div></div></div><div className="gm-style-mtc" style={{float: 'left', position: 'relative'}}><div role="button" tabIndex={0} title="Show satellite imagery" aria-label="Show satellite imagery" aria-pressed="false" draggable="false" style={{direction: 'ltr', overflow: 'hidden', textAlign: 'center', height: 40, display: 'table-cell', verticalAlign: 'middle', position: 'relative', color: 'rgb(86, 86, 86)', fontFamily: 'Roboto, Arial, sans-serif', userSelect: 'none', fontSize: 18, backgroundColor: 'rgb(255, 255, 255)', padding: '0px 17px', borderBottomRightRadius: 2, borderTopRightRadius: 2, WebkitBackgroundClip: 'padding-box', backgroundClip: 'padding-box', boxShadow: 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px', minWidth: 65, borderLeft: 0}}>Satellite</div><div style={{backgroundColor: 'white', zIndex: -1, padding: 2, borderBottomLeftRadius: 2, borderBottomRightRadius: 2, boxShadow: 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px', position: 'absolute', right: 0, top: 40, textAlign: 'left', display: 'none'}}><div draggable="false" title="Show imagery with street names" style={{color: 'black', fontFamily: 'Roboto, Arial, sans-serif', userSelect: 'none', fontSize: 18, backgroundColor: 'rgb(255, 255, 255)', padding: '5px 8px 5px 5px', direction: 'ltr', textAlign: 'left', whiteSpace: 'nowrap'}}><span role="checkbox" style={{verticalAlign: 'middle'}}><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%203H5c-1.11%200-2%20.9-2%202v14c0%201.1.89%202%202%202h14c1.11%200%202-.9%202-2V5c0-1.1-.89-2-2-2zm-9%2014l-5-5%201.41-1.41L10%2014.17l7.59-7.59L19%208l-9%209z%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '1em', width: '1em', transform: 'translateY(0.15em)'}} /><img src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224px%22%20height%3D%2224px%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22%23000000%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M19%205v14H5V5h14m0-2H5c-1.1%200-2%20.9-2%202v14c0%201.1.9%202%202%202h14c1.1%200%202-.9%202-2V5c0-1.1-.9-2-2-2z%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h24v24H0z%22%20fill%3D%22none%22%2F%3E%0A%3C%2Fsvg%3E%0A" style={{height: '1em', width: '1em', transform: 'translateY(0.15em)', display: 'none'}} /></span><label style={{verticalAlign: 'middle', cursor: 'pointer'}}>Labels</label></div></div></div></div></div></div></div>
                  </div>
                  <div className="fw-divider-space" style={{paddingTop: 30}} />
                  <div id="info-list-5c80cf503c7bf" className="info-list-w-icon">
                    <div className="info-block-w-icon">
                      <div className="ci-icon">
                        <div className="ci-icon">
                          <i className="fa fa-map-marker" />
                        </div>
                      </div>
                      <div className="ci-text">
                        <h5>Vu Trong Phung, VN</h5>
                      </div>
                    </div>
                    <div className="info-block-w-icon">
                      <div className="ci-icon">
                        <div className="ci-icon">
                          <i className="fa fa-envelope" />
                        </div>
                      </div>
                      <div className="ci-text">
                        <h5>dat@shopstack.asia</h5>
                      </div>
                    </div>
                    <div className="info-block-w-icon">
                      <div className="ci-icon">
                        <div className="ci-icon">
                          <i className="fa fa-phone" />
                        </div>
                      </div>
                      <div className="ci-text">
                        <h5>+123 654 78900</h5>
                      </div>
                    </div>
                    <div className="info-block-w-icon">
                      <div className="ci-icon">
                        <div className="ci-icon">
                          <i className="fa fa-check" />
                        </div>
                      </div>
                      <div className="ci-text">
                        <h5>Freelance Available</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-xs-12 col-sm-6 ">
                <div id="col_inner_id-5c80cf503cc1d" className="fw-col-inner" data-paddings="0px 0px 0px 0px">
                  <div className="block-title">
                    <h3>Contact<span> Form</span></h3>
                  </div>
                  <form id="contact_form_5c80cf503d3fa" className="contact-form" action="#" method="post" noValidate="true">
                    <div className="messages" />
                    <div className="controls">
                      <div className="form-group form-group-with-icon has-error has-danger">
                        <i className="form-control-icon fa fa-user" />
                        <label>Full Name</label>
                        <input id="form_name" type="text" name="name" className="form-control" required="required" data-error="Name is required." />
                        <div className="form-control-border" />
                        <div className="help-block with-errors">Name is required.</div>
                      </div>
                      <div className="form-group form-group-with-icon has-error has-danger">
                        <i className="form-control-icon fa fa-envelope" />
                        <label>Email Address</label>
                        <input id="form_email" type="email" name="email" className="form-control" required="required" data-error="Valid email is required." />
                        <div className="form-control-border" />
                        <div className="help-block with-errors">Valid email is required.</div>
                      </div>
                      <div className="form-group form-group-with-icon has-error has-danger">
                        <i className="form-control-icon fa fa-comment" />
                        <label>Message for Me</label>
                        <textarea id="form_message" name="message" className="form-control" rows={4} required="required" data-error="Please, leave me a message." defaultValue={""} />
                        <div className="form-control-border" />
                        <div className="help-block with-errors">Please, leave me a message.</div>
                      </div>
                      <div className="g-recaptcha" data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"><div style={{width: 304, height: 78}}><div><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=2&k=6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI&co=aHR0cHM6Ly9sbXBpeGVscy5jb206NDQz&hl=en&v=v1550471573786&size=normal&cb=wu7jfnxdwwsh" role="presentation" name="a-z9lxa9gbhhff" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox" width={304} height={78} frameBorder={0} /></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{width: 250, height: 40, border: '1px solid rgb(193, 193, 193)', margin: '10px 25px', padding: 0, resize: 'none', display: 'none'}} defaultValue={""} /></div></div>
                      <input type="submit" className="button btn-send disabled" defaultValue="Send message" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</section>
   </div></div>
    );
  }
}

export default Contact;