angular.module("MyFirstApp",[])


.controller("FirstController", ["$scope",function(m){
	m.nombre = "Omar";
	m.nuevoComentario = {};
	m.comentarios = [
		{
			comentario: "Buen tutorial",
			username: "omarmorales"
		},
		{
			comentario: "pesimo tutorial",
			username: "mateobetancourt"
		}
	];
	m.agregarComentario = function(){
		m.comentarios.push(m.nuevoComentario);
		m.nuevoComentario = {};
	}
}]);
//MVM