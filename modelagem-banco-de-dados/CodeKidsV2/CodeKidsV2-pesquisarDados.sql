SELECT * from imagem_jogos

SELECT * FROM jogos

SELECT * from jogos INNER JOIN imagem_jogos on jogos.imagem_jogos_id = imagem_jogos.id 

SELECT * from imagem_videos

SELECT * FROM videos

SELECT * from usuarios

SELECT * from videos_assistidos

SELECT * from videos_assistidos va INNER join usuarios u on u.id = va.usuario_id  INNER join videos v on v.id = va.video_id 

SELECT * from jogos_completados

SELECT * from jogos_completados jc INNER join usuarios u on u.id = jc.usuario_id  INNER join jogos j on j.id = jc.jogo_id where u.nome_completo = 'Viviane Oliveira'

