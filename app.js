var app 			  = require('./config/app_config.js');
var db 				  = require('./config/db_config');
var produto 		  = require('./models/Produto');
var produtoController = require('./controller/ProdutoController');

app.get('/produtos',function(req,res){
	produtoController.list(function(resp){
		res.json(resp);
	});
});

app.post('/cadastro', function(req,res){
	var nome      = req.body.nome; 
	var descricao = req.body.descricao;
	var valor     = req.body.valor;
    console.log('------------------0');
	console.log('NOme: '      + req.body.nome);
	console.log('descricao: ' + req.body.descricao);
	console.log('valor: '     + req.body.valor);

	produtoController.save(nome, descricao, valor, function(resp){
		res.json(resp);
	});
});



show: function(req,res){
			Amigos.findById(req.params.id,function(err,dados){
				if (err){
					req.flash('erro', 'Erro ao carregar: ' + err);
					res.redirect('/amigos');
				}else{
					res.render('amigos/show', {model:dados});

				}
			});
		}