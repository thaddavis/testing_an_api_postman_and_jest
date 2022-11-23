function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = class MyWatchPlugin {
  // Add hooks to Jest lifecycle events
  apply(jestHooks) {
    jestHooks.shouldRunTestSuite((testSuiteInfo) => {
      return true;
    });

    jestHooks.onTestRunComplete((testSuiteInfo) => {});

    jestHooks.onFileChange(async ({ projects }) => {
      this._projects = projects;
    });
  }

  // Get the prompt information for interactive plugins
  getUsageInfo(globalConfig) {}

  // Executed when the key from `getUsageInfo` is input
  run(globalConfig, updateConfigAndRun) {}
};
