🏃 Projeto Registro de Corrida
Aplicação desktop em Python para registrar, visualizar e organizar dados de corridas e caminhadas. Ideal para controle pessoal de desempenho ao longo do tempo.

🧾 Descrição
Este projeto foi desenvolvido com Python e utiliza a biblioteca tkinter para criar uma interface gráfica amigável. Ele permite ao usuário inserir dados sobre suas corridas (como distância, tempo e data), visualizar um histórico das atividades e analisar seu progresso com o tempo.

A base de dados utilizada é local, implementada com SQLite, o que garante leveza e independência da internet.

✅ Funcionalidades
📝 Registro de corridas com:

Data

Distância (km)

Tempo (min)

📋 Visualização de todas as corridas registradas

🗑️ Remoção de registros indesejados

🧠 Cálculo automático de velocidade média

💾 Armazenamento persistente com banco SQLite

🖼️ Interface gráfica desenvolvida com tkinter

📁 Estrutura de Diretórios
plaintext
Copiar
Editar
Projeto_Registro_Corrida/
│
├── main.py                # Arquivo principal do aplicativo
├── database.py            # Módulo de conexão e operações com SQLite
├── interface.py           # Interface gráfica com tkinter
├── corrida.db             # Arquivo de banco de dados (gerado automaticamente)
├── README.md              # Este arquivo
└── requirements.txt       # Lista de bibliotecas usadas (opcional)
▶️ Como executar
Pré-requisitos:
Python 3.x instalado

Passos:
bash
Copiar
Editar
git clone https://github.com/seuusuario/Projeto_Registro_Corrida.git
cd Projeto_Registro_Corrida
pip install -r requirements.txt  # (opcional)
python main.py
O banco de dados corrida.db será criado automaticamente na primeira execução, caso não exista.

🧰 Tecnologias utilizadas
Python 3

Tkinter

SQLite3

💡 Possíveis melhorias
📈 Adicionar gráficos com matplotlib para analisar desempenho

🔄 Exportação/importação de dados em CSV

📱 Versão mobile com Kivy ou conversão para Android com BeeWare

☁️ Integração com banco de dados online para backup

🤝 Contribuições
Contribuições são muito bem-vindas! Caso tenha ideias para novas funcionalidades ou melhorias, sinta-se à vontade para abrir issues ou enviar pull requests.

👤 Autor
Desenvolvido por [Tiago Geisel de Oliveira]
📧 Email: [tiagogeisel4@gmail.com]
