import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Neuromorphic UI Dashboard</h1>
    <div class="dashboard">
      <neuro-node></neuro-node>
      <wasm-neuro-analysis></wasm-neuro-analysis>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }