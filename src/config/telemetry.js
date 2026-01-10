import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import { metrics } from '@opentelemetry/api'; // <--- Añade esto

const exporter = new PrometheusExporter({ port: 9464 });

const sdk = new NodeSDK({
  metricReader: exporter,
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();

// Creamos un medidor específico para nuestra App
export const meter = metrics.getMeter('harry-potter-api');
export const loginCounter = meter.createCounter('auth_login_total', {
  description: 'Número total de intentos de login'
});

console.log('Telemetría avanzada iniciada en el puerto 9464');
export default sdk;