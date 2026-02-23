<script lang="ts">
  import { utilities } from '../../data';

  let powerUsage = $state(0);
  let powerTotal = $state(0);

  $effect(() => {
    let frame: number;

    function tick() {
      powerUsage = utilities.power.usage;
      powerTotal = utilities.power.total;
      frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  });
</script>

<div class="power-display">
  <div class="power-stat">Power Total: {powerTotal}</div>
  <div class="power-stat">Power Usage: {powerUsage}</div>
</div>

<style>
  .power-display {
    padding: 8px 12px;
    font-family: monospace;
    font-size: 14px;
    color: #e0e0e0;
    display: flex;
    gap: 16px;
  }

  .power-stat {
    background: rgba(0, 0, 0, 0.6);
    padding: 4px 8px;
    border-radius: 4px;
  }
</style>
