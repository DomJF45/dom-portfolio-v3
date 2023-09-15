import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

interface Props {
  path: string[];
  current: string;
}

const Crumbs = (props: Props) => {
  const { path, current } = props;

  return (
    <Breadcrumb separator={<FaChevronRight size={13} />}>
      {path.map((pathItem, index) => {
        return (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink as={RouterLink} to={`/${pathItem}`}>
              {pathItem}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink as={RouterLink} to={"#"}>
          {current}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Crumbs;
