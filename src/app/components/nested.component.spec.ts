import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

@Component({
    selector: 'my-collapsible-panel',
    template: ``
})
class CollapsiblePanelComponent { }

@Component({
    selector: 'my-test',
    template: `<my-collapsible-panel></my-collapsible-panel>`
})
class TestComponent { }

describe('nested-component', () => {

    describe('Mock all nested components', () => {
        let component: TestComponent;
        let fixture: ComponentFixture<TestComponent>;

        beforeEach(async () => {
            await TestBed.configureTestingModule({
                declarations: [TestComponent, CollapsiblePanelComponent]
            }).compileComponents();
        })

        beforeEach(async () => {
            fixture = TestBed.createComponent(TestComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        })

        it('should create the component', () => {
            {
                expect(component).toBeTruthy();
            }
        })

    });

    describe('ignoring nested components', () => {
        let component: TestComponent;
        let fixture: ComponentFixture<TestComponent>;

        // Note: this time we did not add the Collapsible component to declaration

        beforeEach(async () => {
            await TestBed.configureTestingModule({
                declarations: [TestComponent],
                schemas: [CUSTOM_ELEMENTS_SCHEMA]
            }).compileComponents();
        })

        beforeEach(async () => {
            fixture = TestBed.createComponent(TestComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        })

        it('should ignore the component', () => {
            expect(component).toBeTruthy();
        })
    });
})