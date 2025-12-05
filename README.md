## 🍰 Doceria Dolcezza

  - Projeto completo (Front-end + Back-end) para gestão e navegação de uma doceria fictícia chamada Dolcezza.

##### ✨ Descrição do Projeto

   - O sistema Doceria Dolcezza é composto por um front-end moderno e interativo desenvolvido em React +    TypeScript, e um back-end robusto criado com Django REST Framework, utilizando PostgreSQL como banco de dados e recursos adicionais como limitador de requisições (Rate Limit) para segurança.

##### 🎨 Front-end

    Tecnologias Utilizadas  
        React
        TypeScript
        JSX
        React Router

### Desenvolvido por

 - 👩‍💻 Edilane França



    - Interface moderna e responsiva
    - Consumo da API Django


###### ⚙️ Back-end
    
    Tecnologias Utilizadas

        Python
        Django
        Django REST Framework
        ORM padrão do Django
        PostgreSQL
        django-ratelimit (ou outro limitador usado)

##### 🗄️ Configuração do Banco de Dados (PostgreSQL)

   - No arquivo settings.py, as credenciais seguem o modelo:

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': 'nome_do_banco',
            'USER': 'usuario',
            'PASSWORD': 'senha',
            'HOST': 'localhost',
            'PORT': '5432',
        }
    }

##### 📁 Estrutura do Projeto
    /frontend
        src/
        package.json
        tsconfig.json
    /backend
        manage.py
        app/
        backend/

###### 🚀 Como Conectar Front-end e Back-end

    Edite o arquivo de configuração onde fica a URL da API no React:
    export const API_URL = "http://localhost:8000/api/";

#### ❤️ Créditos

Projeto desenvolvido por:

    Front-end: Edilane França
    Back-end: ...