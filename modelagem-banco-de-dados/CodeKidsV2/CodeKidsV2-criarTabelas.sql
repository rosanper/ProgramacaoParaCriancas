-- Tabelas

CREATE TABLE jogos (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(100) UNIQUE NOT NULL,
  descricao VARCHAR(1000),
  link VARCHAR(100) NOT NULL,
  imagem_jogos_id INTEGER
);

CREATE TABLE imagem_jogos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  link VARCHAR(100) NOT NULL,
  descricao VARCHAR
);

CREATE TABLE videos (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(100) UNIQUE NOT NULL,
  descricao VARCHAR(1000),
  link VARCHAR(100) NOT NULL,
  imagem_videos_id INTEGER
);

CREATE TABLE imagem_videos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  link VARCHAR(100) NOT NULL,
  descricao VARCHAR
);

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome_completo VARCHAR(100) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  senha VARCHAR(20) NOT NULL,
  data_nascimento DATE
);

CREATE TABLE videos_assistidos (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER,
  video_id INTEGER
);

CREATE TABLE jogos_completados (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER,
  jogo_id INTEGER
);

-- Chaves Estrangeiras

ALTER TABLE jogos ADD FOREIGN KEY (imagem_jogos_id) REFERENCES imagem_jogos (id);

ALTER TABLE videos ADD FOREIGN KEY (imagem_videos_id) REFERENCES imagem_videos (id);

ALTER TABLE videos_assistidos ADD FOREIGN KEY (usuario_id) REFERENCES usuarios (id);

ALTER TABLE videos_assistidos ADD FOREIGN KEY (video_id) REFERENCES videos (id);

ALTER TABLE jogos_completados ADD FOREIGN KEY (usuario_id) REFERENCES usuarios (id);

ALTER TABLE jogos_completados ADD FOREIGN KEY (jogo_id) REFERENCES jogos (id);

