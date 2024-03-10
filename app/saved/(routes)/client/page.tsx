import Container from "@/components/Container";
import SavedCard from "@/components/SavedCard/SavedCard";
import SavedHeader from "@/components/SavedHeader/SavedHeader";

export default function Index() {
  return (
    <div className="py-24 xl:py-12 lg:py-8 sm:pt-6">
      <SavedHeader />
      <Container>
        <div className="flex flex-wrap -px-4  -py-6 md:py-4 ">
          <div className="w-1/4 md:w-1/2 sm:w-[100%] px-4 py-6 lg:px-2 md:py-2">
            <SavedCard title="Education" />
          </div>
          <div className="w-1/4 md:w-1/2 sm:w-[100%] px-4 py-6 lg:px-2 md:py-2">
            <SavedCard title="Education" />
          </div>
          <div className="w-1/4 md:w-1/2 sm:w-[100%] px-4 py-6 lg:px-2 md:py-2">
            <SavedCard title="Education" />
          </div>
          <div className="w-1/4 md:w-1/2 sm:w-[100%] px-4 py-6 lg:px-2 md:py-2">
            <SavedCard title="Education" />
          </div>
          <div className="w-1/4 md:w-1/2 sm:w-[100%] px-4 py-6 lg:px-2 md:py-2">
            <SavedCard title="Education" />
          </div>
          <div className="w-1/4 md:w-1/2 sm:w-[100%] px-4 py-6 lg:px-2 md:py-2">
            <SavedCard title="Education" />
          </div> 
          <div className="w-1/4 md:w-1/2 sm:w-[100%] px-4 py-6 lg:px-2 md:py-2">
            <SavedCard title="Education" />
          </div>
          <div className="w-1/4 md:w-1/2 sm:w-[100%] px-4 py-6 lg:px-2 md:py-2">
            <SavedCard title="Education" />
          </div>
        </div>
      </Container>
    </div>
  );
}
