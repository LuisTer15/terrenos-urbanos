

// THIS PART FOR THE SIZE OF THE WINDOW
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);


// THIS PART FOR THE SIZE OF THE MAP
$(document).ready(function(){
  $('div#map').css("height", h);
});


// THIS PART TO HIDE THE 
$(document).ready(function() {
	var frente_1 = $('#frente_predio_1').text();
	if (frente_1 < 1) {
		$('div#properties').css("height", h);
		$('#property-1').hide();
		$('#property-2').hide();
		$('#property-3').hide();
		$('#property-4').hide();
		$('#property-5').hide();
	} else {
		$('#text_non_property').hide();
	}
});

// THIS PART TO HIDE THE DATABASE FOR CONSULT
$(document).ready(function(){
  $('div#db_predio').hide();
  $('div#db_predio_venta').hide();
  $('div#db_predio_venta1').hide();
  $('div#db_normativa').hide();
  $('div#locations').hide();
});

// THIS PART FOR THE MAP LOAD
$(document).ready(function() {
	var mymap = L.map('map').setView([4.67795, -74.04577], 17);

        L.tileLayer('https://api.mapbox.com/styles/v1/lternera/cj3yv171306ma2rprn1soczke/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHRlcm5lcmEiLCJhIjoiY2l6d3dsamlhMDFtdDMybHNiOWJsejB3byJ9.hMuAlbbTiS-HdnW41SwPlA', {
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
          maxZoom: 18,
          id: 'lternera.cj3yv8zhw0jap2rjxukdytcqf',
          accessToken: 'pk.eyJ1IjoibHRlcm5lcmEiLCJhIjoiY2l6d3dsamlhMDFtdDMybHNiOWJsejB3byJ9.hMuAlbbTiS-HdnW41SwPlA'
        }).addTo(mymap);

    var mapIconPrice = L.Icon.extend({
            options: {
              iconSize:     [80, 42],
              iconAnchor:   [10, 5],
            }
          });

    var icon_price = new mapIconPrice({iconUrl: '/static/images/icono_precio.png'});
    var icon_price1 = new mapIconPrice({iconUrl: '/static/images/icono_precio1.png'});
    var icon_price2 = new mapIconPrice({iconUrl: '/static/images/icono_precio2.png'});
    var marker_price = L.marker([4.67892, -74.04839], {icon: icon_price}).addTo(mymap);
    var marker_price1 = L.marker([4.67884, -74.04704], {icon: icon_price1}).addTo(mymap);
    var marker_price2 = L.marker([4.6785, -74.04579], {icon: icon_price2}).addTo(mymap);

    var mapIcon = L.Icon.extend({
            options: {
              iconSize:     [40, 52],
              iconAnchor:   [20, 50],
            }
          });

    marker_price.bindPopup("<b>Precio de venta: $7,250,000,000.0</b><br>Casa de Bienes Raices SAS<br>Tel: (1) 6916565");
    marker_price1.bindPopup("<b>Precio de venta: $8,397,000,000.0</b><br>Julio Corredor & Cia<br>Tel: (1) 4853000");
    marker_price2.bindPopup("<b>Precio de venta: $8,500,000,000.0</b><br>A12 Inversiones Inmobiliarias<br>Tel: (1) 4955100");

    var icon1 = new mapIcon({iconUrl: '/static/images/icono_1.png'}),
        icon2 = new mapIcon({iconUrl: '/static/images/icono_2.png'}),
        icon3 = new mapIcon({iconUrl: '/static/images/icono_3.png'}),
        icon4 = new mapIcon({iconUrl: '/static/images/icono_4.png'}),
        icon5 = new mapIcon({iconUrl: '/static/images/icono_5.png'});
    
    var setLocations = $('#frente_2').text();
    if(setLocations > 1) {
    	var lat1 = $('#lat_1').text();
        var lon1 = $('#lon_1').text();
        var marker1 = L.marker([lat1, lon1], {icon: icon1}).addTo(mymap);
        var lat2 = $('#lat_2').text();
        var lon2 = $('#lon_2').text();
        var marker2 = L.marker([lat2, lon2], {icon: icon2}).addTo(mymap);
        var lat3 = $('#lat_3').text();
        var lon3 = $('#lon_3').text();
        var marker3 = L.marker([lat3, lon3], {icon: icon3}).addTo(mymap);
        var lat4 = $('#lat_4').text();
        var lon4 = $('#lon_4').text();
        var marker4 = L.marker([lat4, lon4], {icon: icon4}).addTo(mymap);
        var lat5 = $('#lat_5').text();
        var lon5 = $('#lon_5').text();
        var marker5 = L.marker([lat5, lon5], {icon: icon5}).addTo(mymap);
       }
    
    // THIS PART FOR THE CONSULT ACTION
    $('div#btn_consult').click(function() {

    	$('#property-1').show();
    	$('#text_non_property').hide();

	    // THIS PART FOR THE PREDIO VARIABLES 
        var dir_catastral = $('#consult').val();
        $('#dir_cat_1').text(dir_catastral);

        var area1 = $('#predio_area').text();
        $('#area_predio_1').text(area1);

        var frente1 = $('#predio_frente').text();
        $('#frente_predio_1').text(frente1);

        var lat6 = $('#predio_latitude').text();
        var lon6 = $('#predio_longitude').text();
        var marker6 = L.marker([lat6, lon6], {icon: icon1}).addTo(mymap);

        var uso1 = $('#predio_uso').text();
        $('#uso_predio_1').text(uso1);

        var a_p_c1 = $('#predio_a_p_c').text();
        $('#a_p_c_predio_1').text(a_p_c1);

        var area_c1 = $('#predio_area_c').text();
        $('#area_c_predio_1').text(area_c1);

        // THIS PART FOR THE NORMATIVA VARIABLES 
        var i_m_o1 = $('#norma_i_m_o').text();
        $('#i_m_o_norma_1').text(i_m_o1);

        var i_m_c1 = $('#norma_i_m_c').text();
        $('#i_m_c_norma_1').text(i_m_c1);

        var a_m_p1 = $('#norma_a_m_p').text();
        $('#a_m_p_norma_1').text(a_m_p1);

        var tipologia1 = $('#norma_tipologia').text();
        $('#tipologia_norma_1').text(tipologia1);

        var antejardin1 = $('#norma_antejardin').text();
        $('#antejardin_norma_1').text(antejardin1);

        var semisotano1 = $('#norma_semisotano').text();
        $('#semisotano_norma_1').text(semisotano1);

        var subdivision1 = $('#norma_subdivision').text();
        $('#subdivision_norma_1').text(subdivision1);

        var sub_area_min1 = $('#norma_area_min').text();
        $('#sub_area_min_norma_1').text(sub_area_min1);

        var sub_frente_min1 = $('#norma_frente_min').text();
        $('#sub_area_frente_norma_1').text(sub_frente_min1);

        var a_m_o_1 = area1 * i_m_o1;
	    $('#a_m_o_1').text(a_m_o_1);

	    var a_m_c_1 = area1 * i_m_c1;
	    $('#a_m_c_1').text(a_m_c_1);
    });

    // THIS PART FOR THE ICON VENTAS
    $(".leaflet-marker-icon").click(function() {

    	$('#property-1').show();
    	$('#text_non_property').hide();

	    // THIS PART FOR THE PREDIO VARIABLES 
        var dir_catastral = $('#predio_dir_cat_v').text();
        $('#dir_cat_1').text(dir_catastral);

        var area1 = $('#predio_area_v').text();
        $('#area_predio_1').text(area1);

        var frente1 = $('#predio_frente_v').text();
        $('#frente_predio_1').text(frente1);

        var lat7 = $('#predio_latitude_v').text();
        var lon7 = $('#predio_longitude_v').text();
        var marker7 = L.marker([lat7, lon7], {icon: icon1}).addTo(mymap);

        var uso1 = $('#predio_uso_v').text();
        $('#uso_predio_1').text(uso1);

        var a_p_c1 = $('#predio_a_p_c_v').text();
        $('#a_p_c_predio_1').text(a_p_c1);

        var area_c1 = $('#predio_area_c_v').text();
        $('#area_c_predio_1').text(area_c1);

        // THIS PART FOR THE NORMATIVA VARIABLES 
        var i_m_o1 = $('#norma_i_m_o').text();
        $('#i_m_o_norma_1').text(i_m_o1);

        var i_m_c1 = $('#norma_i_m_c').text();
        $('#i_m_c_norma_1').text(i_m_c1);

        var a_m_p1 = $('#norma_a_m_p').text();
        $('#a_m_p_norma_1').text(a_m_p1);

        var tipologia1 = $('#norma_tipologia').text();
        $('#tipologia_norma_1').text(tipologia1);

        var antejardin1 = $('#norma_antejardin').text();
        $('#antejardin_norma_1').text(antejardin1);

        var semisotano1 = $('#norma_semisotano').text();
        $('#semisotano_norma_1').text(semisotano1);

        var subdivision1 = $('#norma_subdivision').text();
        $('#subdivision_norma_1').text(subdivision1);

        var sub_area_min1 = $('#norma_area_min').text();
        $('#sub_area_min_norma_1').text(sub_area_min1);

        var sub_frente_min1 = $('#norma_frente_min').text();
        $('#sub_area_frente_norma_1').text(sub_frente_min1);

        var a_m_o_1 = area1 * i_m_o1;
	    $('#a_m_o_1').text(a_m_o_1);

	    var a_m_c_1 = area1 * i_m_c1;
	    $('#a_m_c_1').text(a_m_c_1);

	    var valor_terreno = "7,250,000,000";
	    $('#valor_terreno').text(valor_terreno);
    });
});

//
//
// THIS PART FOR THE SEARCH
$(document).ready(function() {
	$('div#calcule').click(function(){
	// THIS PART FOR THE VARIABLES FROM THE USER DATA
	var userAreaUtil = $('#user_area_util').val();
	console.log(userAreaUtil + ' userAreaUtil');

	var userAlfa = $('#user_f_alfa').val();
	console.log(userAlfa + ' user_f_alfa');

	var userValorMC = $('#user_valor_mc').val();
	console.log(userValorMC + ' userValorMC');

// PREDIO #1
// THIS PART FOR THE VARIABLES PAST TROUGH PYTHON
	var areaPredio_1 = $('#area_predio_1').text();
	console.log(areaPredio_1 + ' areaPredio_1');

	var a_m_o_1 = $('#a_m_o_1').text();
	console.log(a_m_o_1 + ' a_m_o_1');

	var a_m_c_1 = $('#a_m_c_1').text();
	console.log(a_m_c_1 + ' a_m_c_1');

// THIS PART FOR THE VARIABLES GENERATED IN THIS JS FILE
	var pAreaUtil_1 = a_m_c_1 * userAreaUtil / 100;
	console.log(pAreaUtil_1 + ' pAreaUtil1_1');
	$('#p_area_util_1').text(pAreaUtil_1);

	var pValorVentas_1 = pAreaUtil_1 * userValorMC;
	console.log(pValorVentas_1 + ' pValorVentas_1');
	$('#p_valor_ventas_1').text(pValorVentas_1);

	var tValorMax_1 = userAlfa * pValorVentas_1 / 100;
	console.log(tValorMax_1 + ' tValorMax_1');
	$('#t_valor_max_1').text(tValorMax_1);

	var tValorMC_1 = tValorMax_1 / areaPredio_1;
	console.log(tValorMC_1 + ' tValorMC_1');
	$('#t_valor_mc_1').text(tValorMC_1);

// PREDIO #2
// THIS PART FOR THE VARIABLES PAST TROUGH PYTHON
	var areaPredio_2 = $('#area_predio_2').text();
	console.log(areaPredio_2 + ' areaPredio_2');

	var a_m_o_2 = $('#a_m_o_2').text();
	console.log(a_m_o_2 + ' a_m_o_2');

	var a_m_c_2 = $('#a_m_c_2').text();
	console.log(a_m_c_2 + ' a_m_c_2');

// THIS PART FOR THE VARIABLES GENERATED IN THIS JS FILE
	var pAreaUtil_2 = a_m_c_2 * userAreaUtil / 100;
	console.log(pAreaUtil_2 + ' pAreaUtil1_2');
	$('#p_area_util_2').text(pAreaUtil_2);

	var pValorVentas_2 = pAreaUtil_2 * userValorMC;
	console.log(pValorVentas_2 + ' pValorVentas_2');
	$('#p_valor_ventas_2').text(pValorVentas_2);

	var tValorMax_2 = userAlfa * pValorVentas_2 / 100;
	console.log(tValorMax_2 + ' tValorMax_2');
	$('#t_valor_max_2').text(tValorMax_2);

	var tValorMC_2 = tValorMax_2 / areaPredio_2;
	console.log(tValorMC_2 + ' tValorMC_2');
	$('#t_valor_mc_2').text(tValorMC_2);

// PREDIO #3
// THIS PART FOR THE VARIABLES PAST TROUGH PYTHON
	var areaPredio_3 = $('#area_predio_3').text();
	console.log(areaPredio_3 + ' areaPredio_3');

	var a_m_o_3 = $('#a_m_o_3').text();
	console.log(a_m_o_3 + ' a_m_o_3');

	var a_m_c_3 = $('#a_m_c_3').text();
	console.log(a_m_c_3 + ' a_m_c_3');

// THIS PART FOR THE VARIABLES GENERATED IN THIS JS FILE
	var pAreaUtil_3 = a_m_c_3 * userAreaUtil / 100;
	console.log(pAreaUtil_3 + ' pAreaUtil1_3');
	$('#p_area_util_3').text(pAreaUtil_3);

	var pValorVentas_3 = pAreaUtil_3 * userValorMC;
	console.log(pValorVentas_3 + ' pValorVentas_3');
	$('#p_valor_ventas_3').text(pValorVentas_3);

	var tValorMax_3 = userAlfa * pValorVentas_3 / 100;
	console.log(tValorMax_3 + ' tValorMax_3');
	$('#t_valor_max_3').text(tValorMax_3);

	var tValorMC_3 = tValorMax_3 / areaPredio_3;
	console.log(tValorMC_3 + ' tValorMC_3');
	$('#t_valor_mc_3').text(tValorMC_3);

// PREDIO #4
// THIS PART FOR THE VARIABLES PAST TROUGH PYTHON
	var areaPredio_4 = $('#area_predio_4').text();
	console.log(areaPredio_4 + ' areaPredio_4');

	var a_m_o_4 = $('#a_m_o_4').text();
	console.log(a_m_o_4 + ' a_m_o_4');

	var a_m_c_4 = $('#a_m_c_4').text();
	console.log(a_m_c_4 + ' a_m_c_4');

// THIS PART FOR THE VARIABLES GENERATED IN THIS JS FILE
	var pAreaUtil_4 = a_m_c_4 * userAreaUtil / 100;
	console.log(pAreaUtil_4 + ' pAreaUtil1_4');
	$('#p_area_util_4').text(pAreaUtil_4);

	var pValorVentas_4 = pAreaUtil_4 * userValorMC;
	console.log(pValorVentas_4 + ' pValorVentas_4');
	$('#p_valor_ventas_4').text(pValorVentas_4);

	var tValorMax_4 = userAlfa * pValorVentas_4 / 100;
	console.log(tValorMax_4 + ' tValorMax_4');
	$('#t_valor_max_4').text(tValorMax_4);

	var tValorMC_4 = tValorMax_4 / areaPredio_4;
	console.log(tValorMC_4 + ' tValorMC_4');
	$('#t_valor_mc_4').text(tValorMC_4);

// PREDIO #5
// THIS PART FOR THE VARIABLES PAST TROUGH PYTHON
	var areaPredio_5 = $('#area_predio_5').text();
	console.log(areaPredio_5 + ' areaPredio_5');

	var a_m_o_5 = $('#a_m_o_5').text();
	console.log(a_m_o_5 + ' a_m_o_5');

	var a_m_c_5 = $('#a_m_c_5').text();
	console.log(a_m_c_5 + ' a_m_c_5');

// THIS PART FOR THE VARIABLES GENERATED IN THIS JS FILE
	var pAreaUtil_5 = a_m_c_5 * userAreaUtil / 100;
	console.log(pAreaUtil_5 + ' pAreaUtil1_5');
	$('#p_area_util_5').text(pAreaUtil_5);

	var pValorVentas_5 = pAreaUtil_5 * userValorMC;
	console.log(pValorVentas_5 + ' pValorVentas_5');
	$('#p_valor_ventas_5').text(pValorVentas_5);

	var tValorMax_5 = userAlfa * pValorVentas_5 / 100;
	console.log(tValorMax_5 + ' tValorMax_5');
	$('#t_valor_max_5').text(tValorMax_5);

	var tValorMC_5 = tValorMax_5 / areaPredio_5;
	console.log(tValorMC_5 + ' tValorMC_5');
	$('#t_valor_mc_5').text(tValorMC_5);
});
});






        

        




