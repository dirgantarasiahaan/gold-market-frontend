import { TestBed } from "@angular/core/testing";
import { AppModule } from "./app.module";
import { LoginModule } from "./login/login.module";
import { HomeModule } from "./pages/components/home/home.module";
import { TransactionModule } from "./pages/components/products/components/transaction/transaction.module";
import { ProductsModule } from "./pages/components/products/products.module";
import { ProfileModule } from "./pages/components/profile/profile.module";
import { PagesModule } from "./pages/pages.module";
import { RegisterModule } from "./register/register.module";
import { SharedModule } from "./shared/shared.module";
import { TemplateModule } from "./template/template.module";

describe('Module', () => {
  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [
              AppModule,
              SharedModule,
              TemplateModule,
              PagesModule,
              HomeModule,
              TransactionModule,
              LoginModule,
              RegisterModule,
              ProductsModule,
              ProfileModule

          ]
      })
  })

  it('initilize AppModule', () => {
      const module = TestBed.inject(AppModule);
      expect(module).toBeTruthy()
  })
  it('initilize SharedModule', () => {
      const module = TestBed.inject(SharedModule);
      expect(module).toBeTruthy()
  })
  it('initilize TemplateModule', () => {
      const module = TestBed.inject(TemplateModule);
      expect(module).toBeTruthy()
  })
  it('initilize PagesModule', () => {
      const module = TestBed.inject(PagesModule);
      expect(module).toBeTruthy()
  })
  it('initilize HomeModule', () => {
      const module = TestBed.inject(HomeModule);
      expect(module).toBeTruthy()
  })
  it('initilize TransactionModule', () => {
      const module = TestBed.inject(TransactionModule);
      expect(module).toBeTruthy()
  })
  it('initilize LoginModule', () => {
      const module = TestBed.inject(LoginModule);
      expect(module).toBeTruthy()
  })
  it('initilize ProductsModule', () => {
    const module = TestBed.inject(ProductsModule);
    expect(module).toBeTruthy()
})
it('initilize ProfileModule', () => {
  const module = TestBed.inject(ProfileModule);
  expect(module).toBeTruthy()
})
it('initilize RegisterModule', () => {
  const module = TestBed.inject(RegisterModule);
  expect(module).toBeTruthy()
})
})
