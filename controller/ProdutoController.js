var Produto = require('../models/Produto');

exports.save = function(nome, descricao, valor, callback){
	new Produto({
		'nome':      nome,
		'descricao': descricao,
		'valor':     valor		
	}).save(function(erro, produto){
		if (erro){
			callback({erro: 'Não foi possível salvar. ' + erro})
		}else{
			callback(produto);
		}
	});
}

exports.list = function(callback){
	Produto.find({},function(erro, produto){
		if (erro){
			callback({error: 'Não foi possível encontrar produtos'});
		}else{
			callback(produto);
		}
	});
}

exports.delete = function(id){
	Produto.findById(id,function(erro,produto){
		if (erro){
			callback({erro:'Não foi possível excluir o produto'});
		}else{
			produto.remove(function(erro){
				if (!erro){
					callback({resposta: 'Produto excluido com sucesso'});
				}
			});
		}
	});
}