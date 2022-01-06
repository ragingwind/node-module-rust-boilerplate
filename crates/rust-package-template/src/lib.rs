pub struct RustPackageTemplate {}

impl RustPackageTemplate {
    pub fn new() -> RustPackageTemplate {
        RustPackageTemplate {}
    }

    pub fn pack(&mut self) -> bool {
        true
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_prints() {
        let mut rpt = RustPackageTemplate::new();

        assert_eq!(rpt.pack(), true);
    }
}