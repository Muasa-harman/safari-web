type Safari = {
    id: number;
    name: string;
    price: number;
    duration: string;
    rating: number;
    description?: string;
  };

 // Define the props for SafariList
type SafariListProps = {
    safaris: Safari[];
  }; 

type SafariCardProps = {
    safari: Safari;
  }; 