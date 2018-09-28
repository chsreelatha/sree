import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';

export const  allRoots=[
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent},
    {path:"services",component:ServicesComponent},
    {path:"products",component:ProductsComponent}
  ];