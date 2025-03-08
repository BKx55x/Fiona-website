FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Create our own index.html directly
RUN echo '<!DOCTYPE html>\
<html lang="en">\
<head>\
    <meta charset="UTF-8">\
    <meta name="viewport" content="width=device-width, initial-scale=1.0">\
    <title>Fiona Amber Design | Interior Design Portfolio</title>\
    <style>\
        * { margin: 0; padding: 0; box-sizing: border-box; }\
        body { font-family: Arial, sans-serif; line-height: 1.6; }\
        header { background: #fff; padding: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }\
        nav { display: flex; justify-content: space-between; max-width: 1200px; margin: 0 auto; }\
        .logo { font-size: 24px; font-weight: bold; }\
        .hero { height: 80vh; display: flex; align-items: center; justify-content: center; background: #f5f5f5; text-align: center; }\
        .hero h1 { font-size: 48px; margin-bottom: 10px; }\
        section { padding: 50px 20px; max-width: 1200px; margin: 0 auto; }\
        footer { background: #333; color: white; text-align: center; padding: 20px; }\
    </style>\
</head>\
<body>\
    <header>\
        <nav>\
            <div class="logo">Fiona Amber Design</div>\
        </nav>\
    </header>\
    <section class="hero">\
        <div>\
            <h1>Fiona Amber</h1>\
            <h2>Interior Design Portfolio</h2>\
            <p>Website coming soon!</p>\
        </div>\
    </section>\
    <footer>\
        <p>&copy; 2025 Fiona Amber Design. All rights reserved.</p>\
    </footer>\
</body>\
</html>' > /usr/share/nginx/html/index.html

# Set correct permissions
RUN chmod -R 755 /usr/share/nginx/html
