var r = document.getElementById("insuline_units");
var b = document.getElementById("calcular");
var ratio = 9, sensibilidad = 34;


function calcUniAInyectar()
{
  //obtencion del valor del combobox
  var cho_list = document.getElementById ("cho_items");
  var cho_selected = cho_list.selectedIndex;
  var idCho_selected = cho_list.options[cho_selected].id;

  //obtencion de los valores de cda textfield
  var cho_weight = document.getElementById("cho_weight");
  var cho_weight_num = cho_weight.valueAsNumber;

  var gl_level = document.getElementById("gl_level");
  var gl_level_num = gl_level.valueAsNumber;

  var un_corr = 0;
  var un_cho = 0;
  var un_iny = 0;

  switch (idCho_selected) 
  {
    case "1":
        un_cho = ((cho_weight_num / 50) * 15) / 9;
        if (gl_level_num > 160) 
        {
          gl_level_num -= 160;
          un_corr = gl_level_num / sensibilidad;
        }

        un_iny = un_cho + un_corr;
        r.innerHTML = "Unidades a inyectar -> " + un_iny;
        break;
    case "2":
        console.log("Carb = buñuelo");
        break;
    case "3":
        console.log("Carb = arepa");
        break;
    case "4":
        console.log("Carb = papa");
        break;
    case "5":
        console.log("Carb = harina de trigo");
        break;
    case "6":
        console.log("Pan blanco");
        break;
  }
}

b.addEventListener("click", calcUniAInyectar);
