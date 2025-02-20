import ClientSkeleton from "@/components/Skeletons/ClientSkeleton";

export default function Loading() {
    return (
        <div className="w-4/5 h-full my-4 mx-auto">
            <div className="m-2 p-2 sm:p-4 sm:m-4 ">
                <ClientSkeleton />
            </div>
        </div>
    );
}
