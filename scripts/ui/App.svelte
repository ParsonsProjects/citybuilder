<script lang="ts">
  import { onMount } from 'svelte';
  import { World } from '../world/init';
  import PowerDisplay from './PowerDisplay.svelte';
  import '../../styles/reset.css';

  let canvasContainer: HTMLDivElement;

  onMount(() => {
    const world = new World();
    world.init(canvasContainer);
  });
</script>

<div class="app">
  <header class="toolbar">
    <h1 class="title">CityBuilder</h1>
    <PowerDisplay />
  </header>
  <div class="canvas-container" bind:this={canvasContainer}></div>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: #1a1a2e;
  }

  .toolbar {
    display: flex;
    align-items: center;
    background: #16213e;
    border-bottom: 1px solid #0f3460;
    padding: 4px 12px;
    gap: 16px;
  }

  .title {
    font-family: monospace;
    font-size: 16px;
    font-weight: bold;
    color: #e0e0e0;
  }

  .canvas-container {
    flex: 1;
    overflow: hidden;
  }
</style>
