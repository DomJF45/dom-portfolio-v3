export const useDownloadResume = () => {
  return async (): Promise<void> => {
    try {
      const response = await fetch("/dominick-founds-resume.pdf");
      const blob = await response.blob();
      const fileURL = window.URL.createObjectURL(blob);
      const alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "dominick-founds-resume.pdf";
      alink.click();
    } catch (err) {
      console.log(err);
    }
  };
};
