var app = module.exports = require('derby').createApp('hello', __filename);
app.loadViews(__dirname);

// Маршрут рендерится на клиене и на сервере
app.get('/', function(page, model) {
  // Подписка обеспечивает синхронизацию данных
  model.subscribe('hello.message', function() {
    page.render();
  });
});
