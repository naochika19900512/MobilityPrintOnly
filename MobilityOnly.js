function printJobHook(inputs, actions) {
  if (!inputs.job.isMobilityPrintJob){
    actions.job.cancelAndLog("通常印刷のためキャンセル")
  }
}
