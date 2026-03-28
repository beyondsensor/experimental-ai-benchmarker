import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Ollama Benchmark API started on http://localhost:${PORT}`);
    console.log(`📡 Status check: http://localhost:${PORT}/api/status`);
    console.log(`📝 Get Schemas: http://localhost:${PORT}/api/ollama/schemas`);
});