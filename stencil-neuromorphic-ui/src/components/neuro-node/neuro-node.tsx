import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'neuro-node',
  styleUrl: 'neuro-node.css',
  shadow: true
})
export class NeuroNode {
  @State() status: string = "Neural Node Idle - Awaiting Input";

  activateNode() {
    this.status = "Processing Neural Activity... 🧠";
    setTimeout(() => {
      this.status = "Neural Network Activated - Learning in Progress 🚀";
    }, 3000);
  }

  render() {
    return (
      <div class="neuro-box">
        <h2>AI Neural Node</h2>
        <button onClick={() => this.activateNode()}>{this.status.includes('Idle') ? 'Activate' : 'Processing...'}</button>
        <p>{this.status}</p>
      </div>
    );
  }
}
