import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Ollama Benchmark API started on http://localhost:${PORT}`);
    console.log(`📝 API Docs: http://localhost:${PORT}/api-docs`);
});