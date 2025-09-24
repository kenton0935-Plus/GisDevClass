const defaultControls = ol.control.defaults;  //取用defaults控制器群套件
const FullScreen = ol.control.FullScreen;  //取用FullScreen全螢幕控制器套件
const OverviewMap = ol.control.OverviewMap;  //取用OverviewMap鷹眼控制器套件
const ZoomSlider = ol.control.ZoomSlider;  //取用ZoomSlider放大縮小軸控制器套件

//建立OSM地圖為來源圖層
const source = new ol.source.OSM();

//建立 全螢幕 控制器
const fullScreenControl = new FullScreen();

/* 
  1.建立 鷹眼 控制器
  2.指定來源地圖
 */
const overviewMapControl = new OverviewMap({
  layers: [
    new ol.layer.Tile({
      source: source,    //指定來源地圖
    }),
  ],
});

//建立 放大縮小軸 控制器
const zoomSliderControl = new ZoomSlider();

//建立地圖View(視角)
const view = new ol.View({
  center: ol.proj.fromLonLat([120.6499, 24.1809]),
  zoom: 16
});

//建立地圖
var map = new ol.Map({
  controls: defaultControls().extend([fullScreenControl, overviewMapControl, zoomSliderControl]),
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: source    //指定來源地圖
    })
  ],
  view: view,
});



