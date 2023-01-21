import { utilities } from '../../data';

export class Power {
  wrapper: Element;
  powerUsageEl: Element;
  powerTotalEl: Element;

  constructor(wrapper: Element) {
    this.wrapper = wrapper;
    this.creatPowerElements();
    // window.requestAnimationFrame(() => this.ticker());
  }

  creatPowerElements() {
    this.creatPowerTotalEl();
    this.creatPowerUsageEl();
  }

  powerUsageText() {
    return `Power Usage: ${utilities.power.usage}`;
  }

  powerTotalText() {
    return `Power Usage: ${utilities.power.total}`;
  }

  creatPowerUsageEl() {
    const element = document.createElement('div');
    element.textContent = this.powerUsageText();
    this.wrapper.appendChild(element);
    this.powerUsageEl = element;
  }

  creatPowerTotalEl() {
    const element = document.createElement('div');
    element.textContent = this.powerTotalText();
    this.wrapper.appendChild(element);
    this.powerTotalEl = element;
  }

  updatePower() {
    if (!this.powerUsageEl) return;
    this.powerUsageEl.textContent = this.powerUsageText();
    this.powerTotalEl.textContent = this.powerTotalText();
  }

  ticker() {
    this.updatePower();
    // window.requestAnimationFrame(() => this.ticker());
  }
}
