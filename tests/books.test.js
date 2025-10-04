import request from 'supertest';
import { expect } from 'chai';
import app from '../app.js';   // ❌ will break

// ✅ fix by using dynamic import
const appModule = await import('../app.js');
const app = appModule.default || appModule;
